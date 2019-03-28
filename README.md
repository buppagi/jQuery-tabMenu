# jQuery 플로그인 Tab Menu
> 개인적으로 사용하려고 만들었다가 공유합니다. [이전 개인저장소](https://github.com/buppagi/jQuery-tabMenu)

## 설치방법
- [다운로드.zip](https://github.com/buppagistar/tabMenu/archive/master.zip) 및 [min 파일](https://raw.githubusercontent.com/buppagistar/tabMenu/master/dist/js/tabmenu.min.js)를 다운로드 받습니다.
- `<head></head>`사이 또는 `<body>` 영역에 `<script src="tabMenu.min.js"></script>` 삽입하시면 됩니다.

## 사용하기
- 1번째 탭 말고도 활성화 가능함.
- 클래스 변경가능

### 기본 탭
#### HTML
```html
<div class="tab-menu" id="tabMenu1">
  <ul class="ui_tabs_menu">
    <li><a href="#tabmenu-1">탭 메뉴1</a></li>
    <li><a href="#tabmenu-2">탭 메뉴2</a></li>
    <li><a href="#tabmenu-3">탭 메뉴3</a></li>
  </ul>
  <div class="ui_tabs_contents_wrap">
    <div class="ui_tab_content" id="tabmenu-1">Test 1</div>
    <div class="ui_tab_content" id="tabmenu-2">Test 2</div>
    <div class="ui_tab_content" id="tabmenu-3">Test 3</div>
  </div>
</div>
```

#### JavaScript
```js
$(document).ready(function(){
  $('#tabMenu1').tabMenus();
});
```

### 2번째 탭 활성화
```html
<div class="tab-menu" id="tabMenu2">
  <ul class="ui_tabs_menu">
    <li><a href="#tabmenu2-1">탭 메뉴1</a></li>
    <li><a href="#tabmenu2-2">탭 메뉴2</a></li>
    <li><a href="#tabmenu2-3">탭 메뉴3</a></li>
    <li><a href="#tabmenu2-4">탭 메뉴4</a></li>
  </ul>
  <div class="ui_tabs_contents_wrap">
    <div class="ui_tab_content" id="tabmenu2-1">Test 1</div>
    <div class="ui_tab_content" id="tabmenu2-2">Test 2</div>
    <div class="ui_tab_content" id="tabmenu2-3">Test 3</div>
    <div class="ui_tab_content" id="tabmenu2-4">Test 4</div>
  </div>
</div>
```

```js
$(document).ready(function(){
  $('#tabMenu2').tabMenus({
    startItem: 2
  });
});
```

## 옵션 값
+ `startItem` - 활성화 탭 (기본값: 1)
+ `tabMenuClass` - 탭 메뉴 클래스 (기본 값: ui_tabs_menu)
+ `tabContWrapClass` - 탭 패널 부모 클래스 (기본 값: ui_tabs_contents_wrap)
+ `tabContsClass` - 탭 패널 영역 (기본 값: ui_tab_content)
+ `activeClass` - 활성화 클래스(기본 값: is-current)
+ `event` - click(기본 값), mouseenter, mouseover

### 옵션 변경
```js
$(document).ready(function(){
  $('#tabMenu3').tabMenus({
    event: 'mouseenter'
  });
});
```


## 현재버전 단점
- 다중 셀럭터가 안됩니다. 보완할 필요성 보임.
- 키보드 접근에 대한 보완 필요성 보임.
- 효과 이벤트과 없습니다.


## 마치며
> 혼자 사용하고 연습하고 만들어봤던 플로그인을 공개합니다. 아직 미완성이라 안되는 것들이 있으니 참고부탁드립니다.
> 피드백은 [이슈](https://github.com/buppagistar/tabMenu/issues)에 해주시면 감사하겠습니다.
