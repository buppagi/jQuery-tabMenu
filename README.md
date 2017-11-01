# jQuery Tab Menu
> 초보자들을 위한 Tab Menu 플로그인을 만들어봤습니다.

**다운로드**
압축버전 [tabMenus.min.js](https://raw.githubusercontent.com/singihae/jQuery-tabMenu/master/tabMenu.min.js)


## 사용하기
`<head>`
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="tabMenus.min.js"></script>
```

## 예제

### 기본
**HTML**
```html
<div class="tab-menu" id="tabMenu1">
	<ul class="ui_tabs_menu">
		<li><a href="#tabmenu-1">탭 메뉴1</a></li>
		<li><a href="#tabmenu-2">탭 메뉴2</a></li>
		<li><a href="#tabmenu-3">탭 메뉴3</a></li>
	</ul>
	<div class="ui_tabs_contents" id="tabmenu-1">Test 1</div>
	<div class="ui_tabs_contents" id="tabmenu-2">Test 2</div>
	<div class="ui_tabs_contents" id="tabmenu-3">Test 3</div>
</div>
```

**JavaScript**
```javascript
$(document).ready(function(){
	$('#tabMenu1').tabMenus();
});
```

### 2번째 탭 활성화
**HTML**
```html
<div class="tab-menu" id="tabMenu2">
	<ul class="ui_tabs_menu">
		<li><a href="#tabmenu2-1">탭 메뉴2-1</a></li>
		<li><a href="#tabmenu2-2">탭 메뉴2-2</a></li>
		<li><a href="#tabmenu2-3">탭 메뉴2-3</a></li>
		<li><a href="#tabmenu2-4">탭 메뉴2-4</a></li>
	</ul>
	<div class="ui_tabs_contents" id="tabmenu2-1">Test 2-1</div>
	<div class="ui_tabs_contents" id="tabmenu2-2">Test 2-2</div>
	<div class="ui_tabs_contents" id="tabmenu2-3">Test 2-3</div>
	<div class="ui_tabs_contents" id="tabmenu2-3">Test 2-4</div>
</div>
```
**JavaScript**
```javascript
$(document).ready(function(){
	$('#tabMenu2').tabMenus({
		startItem: 2
	});
});
```

### 마우스 오버 이벤트
**HTML**
```html
<div class="tab-menu" id="tabMenu3">
	<ul class="ui_tabs_menu">
		<li><a href="#tabmenu3-1">탭 메뉴3-1</a></li>
		<li><a href="#tabmenu3-2">탭 메뉴3-2</a></li>
		<li><a href="#tabmenu3-3">탭 메뉴3-3</a></li>
		<li><a href="#tabmenu3-4">탭 메뉴3-4</a></li>
	</ul>
	<div class="ui_tabs_contents" id="tabmenu3-1">Test 3-1</div>
	<div class="ui_tabs_contents" id="tabmenu3-2">Test 3-2</div>
	<div class="ui_tabs_contents" id="tabmenu3-3">Test 3-3</div>
	<div class="ui_tabs_contents" id="tabmenu3-3">Test 3-4</div>
</div>
```

**JavaScript**
```javascript
$(document).ready(function(){
	$('#tabMenu3').tabMenus({
		event: 'mouseover'
	});
});
```

## 지원 브라우저
* Internet Explorer 7 +
* Google Chrome
* Mozilla Firefox 3+
* Opera 10+
