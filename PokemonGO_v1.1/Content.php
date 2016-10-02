<?php
class Content
{
    static $items=[
            1=>["title"=>"index.html",
            "path"=>"index.php",
            "href"=>"index.php?page=1",
            "bodyImage"=>"css/background/back.jpg"],

            2=>["title"=>"start",
            "path"=>"assets/start.html",
            "class"=>"menu__item",
            "href"=>"index.php?page=2",
            "bodyImage"=>"css/background/start_image.png"],

            3=>["title"=>"about",
            "path"=>"assets/about.html",
            "class"=>"menu__item",
            "href"=>"index.php?page=3",
            "bodyImage"=>"css/background/about_image.jpg"],

            4=>["title"=>"top list",
            "path"=>"assets/top_list.html",
            "class"=>"menu__item",
            "href"=>"index.php?page=4",
            "bodyImage"=>"css/background/top_list_image.png"]
    ];
    public static function getPage($numPage){
        if (array_key_exists ( $numPage , self::$items)==true){
            $image=self::getBodyImage($numPage);
            $content="<style>body{background-image:url($image);color:#fff;overflow:hidden;}</style>";
            $content.=file_get_contents(Content::$items[$numPage]['path']);
        }
        return $content;
    }
    public static function getBodyImage($numPage){
        return self::$items[$numPage]['bodyImage'];
    }
    public static function getLogo(){
        $value=self::$items[1];
        $answer="<a href={$value['href']}><img src=\"https://1.bp.blogspot.com/-ULz9dE8cz20/V7ADa_msnAI/AAAAAAAABt8/AJOlI64e9yg3aRexEsfgCvVHJElIKk65gCPcB/s400/pokemon_go_logo.png\"></a>";
        return $answer;
    }
    public static function getMenu($number){
        $answer =self::getLogo();
        $answer.="<ul class=\"menu\">";
        foreach(self::$items as $key => $value){
            if ($key!=1) {
                    if ($number == $key) {
                        $answer.="<li><a href="."{$value['href']}"." class="."menu__item-disable".">"."{$value['title']}"."</a></li>";
                    }
                    else{
                        $answer.="<li><a href="."{$value['href']}"." class="."{$value['class']}".">"."{$value['title']}"."</a></li>";

                    }
            }
        }
        $answer.="</ul>";
        return $answer;
}
}
?>