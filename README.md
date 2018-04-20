# jQuery Tab Menu Plugins
> 웹에서 자주 사용하는 Tab Menu를 초보자들을 위해 플로그인으로 만들었습니다.

**다운로드**

[sghTabMenus.js](https://raw.githubusercontent.com/singihae/jQuery-tabMenu/master/tabMenu.js)

[sghTabMenus.min.js](https://raw.githubusercontent.com/singihae/jQuery-tabMenu/master/tabMenu.min.js)

## 사용하기
**<head>**
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="sghTabMenus.min.js"></script>
```

## 예제

### 기본
**HTML**
```html
<div class="tab-menu" id="tabMenu1">
	<ul class="sgh-tab_menu">
		<li><a href="#tabmenu-1">탭 메뉴1</a></li>
		<li><a href="#tabmenu-2">탭 메뉴2</a></li>
		<li><a href="#tabmenu-3">탭 메뉴3</a></li>
	</ul>
	<div class="sgh-tab_contents_wrap">
		<div class="sgh-tab_content" id="tabmenu-1">Test 1</div>
		<div class="sgh-tab_content" id="tabmenu-2">Test 2</div>
		<div class="sgh-tab_content" id="tabmenu-3">Test 3</div>
	</div>
</div>
```

**JavaScript**
```javascript
$(document).ready(function(){
	$('#tabMenu1').sghTabMenus();
});
```

### 2번째 탭 활성화
**HTML**
```html
<div class="tab-menu" id="tabMenu2">
	<ul class="sgh-tab_menu">
		<li><a href="#tabmenu2-1">탭 메뉴2-1</a></li>
		<li><a href="#tabmenu2-2">탭 메뉴2-2</a></li>
		<li><a href="#tabmenu2-3">탭 메뉴2-3</a></li>
		<li><a href="#tabmenu2-4">탭 메뉴2-4</a></li>
	</ul>
	<div class="sgh-tab_contents_wrap">
		<div class="sgh-tab_content" id="tabmenu2-1">Test 2-1</div>
		<div class="sgh-tab_content" id="tabmenu2-2">Test 2-2</div>
		<div class="sgh-tab_content" id="tabmenu2-3">Test 2-3</div>
		<div class="sgh-tab_content" id="tabmenu2-3">Test 2-4</div>
	</div>
</div>
```
**JavaScript**
```javascript
$(document).ready(function(){
	$('#tabMenu2').sghTabMenus({
		startItem: 2
	});
});
```

### 마우스 오버 이벤트
**HTML**
```html
<div class="tab-menu" id="tabMenu3">
	<ul class="sgh-tab_menu">
		<li><a href="#tabmenu3-1">탭 메뉴3-1</a></li>
		<li><a href="#tabmenu3-2">탭 메뉴3-2</a></li>
		<li><a href="#tabmenu3-3">탭 메뉴3-3</a></li>
		<li><a href="#tabmenu3-4">탭 메뉴3-4</a></li>
	</ul>
	<div class="sgh-tab_contents_wrap">
		<div class="sgh-tab_content" id="tabmenu3-1">Test 3-1</div>
		<div class="sgh-tab_content" id="tabmenu3-2">Test 3-2</div>
		<div class="sgh-tab_content" id="tabmenu3-3">Test 3-3</div>
		<div class="sgh-tab_content" id="tabmenu3-3">Test 3-4</div>
	</div>
</div>
```

**JavaScript**
```javascript
$(document).ready(function(){
	$('#tabMenu3').sghTabMenus({
		event: 'mouseover'
	});
});
```

### 옵션
* startItem - 처음 시작하는 탭
* tabMenuClass - 탭 메뉴 클래스
* tabContWrapClass - 탭 컨텐츠 영역
* tabContsClass - 탭 컨텐츠 클래스
* activeClass - 탭 메뉴 활성화 클래스
* event

**적용화면**
```javascript
startItem: 1,
tabMenuClass: 'sgh-tab_menu',
tabContWrapClass: 'sgh-tab_contents_wrap',
tabContsClass: 'sgh-tab_contents',
activeClass: 'is-current',
event: 'click'
```

## 지원 브라우저
* Internet Explorer 7 +
* Google Chrome
* Mozilla Firefox 3+
* Opera 10+
