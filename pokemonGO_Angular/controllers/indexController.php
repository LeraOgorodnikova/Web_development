<?php

class indexController extends Controller {

	public function index(){
		$message=file_get_contents(BASE_DIR.DS.'view/index.html');
		$this->setResponce($message);
	}
		
}