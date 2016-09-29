<?php
class Menu
{
    static $items=[
            1=>["id"=>1,
            "title"=>"index.html",
            "href"=>"index.php"],

            2=>["id"=>2,
            "title"=>"start",
            "href"=>"start.html",
            "class"=>"menu-item"],

            3=>["id"=>3,
            "title"=>"about",
            "href"=>"about.html",
            "class"=>"menu-item"],

            4=>["id"=>4,
            "title"=>"top_list",
            "href"=>"top_list.hmtl",
            "class"=>"menu-item"]
    ];
    public static function getMain($number){
        $newItem=Menu::$items;
        foreach($newItem as $value){
            foreach($value as $key_value => $line) {
                if (@$number == @$line) {
                    $newItem[$number]["class"]="menu-item-disable";
               }
            }
        }
        echo "<ul class=\"menu\">
<li><a href=\"index.html\"><img src=\"https://1.bp.blogspot.com/-ULz9dE8cz20/V7ADa_msnAI/AAAAAAAABt8/AJOlI64e9yg3aRexEsfgCvVHJElIKk65gCPcB/s400/pokemon_go_logo.png\"> </li></a>
 <li><a href=\"start.html\" class={$newItem[2]['class']}>Start</a> </li>
 <li><a href=\"about.html\" class={$newItem[3]['class']}>About</a></li>
 <li><a href=\"top_list.html\" class={$newItem[4]['class']}>Top List</a></li>
</ul>";
}
}
?>