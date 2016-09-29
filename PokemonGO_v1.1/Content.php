<?php
class Content
{
    static $items=[
            1=>["id"=>1,
            "title"=>"index.html",
            "path"=>"index.php",
            "href"=>"index.php?page=1"],

            2=>["id"=>2,
            "title"=>"start",
            "path"=>"assets/start.html",
            "class"=>"menu-item",
                "href"=>"index.php?page=2"],

            3=>["id"=>3,
            "title"=>"about",
            "path"=>"assets/about.html",
            "class"=>"menu-item",
                "href"=>"index.php?page=3"],

            4=>["id"=>4,
            "title"=>"top list",
            "path"=>"assets/top_list.html",
            "class"=>"menu-item",
                "href"=>"index.php?page=4"]
    ];
    public static function getPage($numPage){
        if (($numPage>0) && ($numPage <5))
          return file_get_contents(Content::$items[$numPage]['path']);
    }
    public static function getMenu($number){
        $newItem=Content::$items;
        $answer="<ul class=\"menu\"><li><a href={$newItem[1]['href']}><img src=\"https://1.bp.blogspot.com/-ULz9dE8cz20/V7ADa_msnAI/AAAAAAAABt8/AJOlI64e9yg3aRexEsfgCvVHJElIKk65gCPcB/s400/pokemon_go_logo.png\"> </li></a>";
        foreach($newItem as $key => $value){
            foreach($value as $key_value => $line) {
                if (@$number == @$line) {
                    $newItem[$number]['class']="menu-item-disable";
                }
            }
            if ($key!=1) $answer.="<li><a href="."{$newItem[$key]['href']}"." class="."{$newItem[$key]['class']}".">"."{$newItem[$key]['title']}"."</a></li>";
        }
        return $answer;
//        echo "<ul class=\"menu\">
// <li><a href={$newItem[1]['href']}><img src=\"https://1.bp.blogspot.com/-ULz9dE8cz20/V7ADa_msnAI/AAAAAAAABt8/AJOlI64e9yg3aRexEsfgCvVHJElIKk65gCPcB/s400/pokemon_go_logo.png\"> </li></a>
// <li><a href={$newItem[2]['href']} class={$newItem[2]['class']}>{$newItem[2]['title']}</a> </li>
// <li><a href={$newItem[3]['href']} class={$newItem[3]['class']}>{$newItem[3]['title']}</a></li>
// <li><a href={$newItem[4]['href']} class={$newItem[4]['class']}>{$newItem[4]['title']}</a></li>
//</ul>";
}
}
?>