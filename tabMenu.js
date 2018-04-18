(function($){
  "use strict";
  var $window = $(window),
      $document = $(document),
      $body = $('body'),
      $wrap = $('#wrap');

  $.fn.tabMenus = function(options){
    var settings = $.extend(true, {}, $.fn.tabMenus.defaults, options);
    var self = this;

    return self.each(function(){
      self.$selector = $(this);
      self.$menu = self.$selector.find('.' + settings.tabMenuClass);
      self.$contents = self.$selector.find('.' + settings.tabContsClass);
      self._eAction = settings.event;

      self._create = function() { // 기본세팅
        $(self.$contents).css('display', 'none');
        self.$menu.attr('role', 'tablist');
        self.$menu.find('> li').each(function(idx, elem){
          var _this = $(this);
          _this.attr({
            'role': 'tab',
            'tabindex': -1,
            'aria-controls': _this.find(settings.childSelector).attr('href').replace(/\#/g,''),
            'aria-selected': false,
            'aria-expanded': false
          }).find(settings.childSelector).attr({
            'role': 'presentation',
            'tabindex': -1
          }).addClass('tabs-anchor');
        });
        self.$contents.each(function(idx){
          var _this = $(this);
          _this.attr({
            'role': 'tabpanel',
            'aria-hidden': true
          });
        });

        self._isLocal();
      };

      self._isLocal = function(){ //재설정
        var elem;
        if (settings.startItem > 1) {
          elem = self.$menu.find('> li:nth-child(' + settings.startItem + ') ').find('a').attr('href');

          self.$menu.find('.' + settings.activeClass).attr({
            'aria-selected': false,
            'aria-expanded': false
          }).removeClass(settings.activeClass);
          self.$menu.find('> li:nth-child(' + settings.startItem + ') ').attr({
            'tabindex': 0,
            'aria-selected': true,
            'aria-expanded': true
          }).find(settings.childSelector).addClass(settings.activeClass);
          $(elem).css('display', 'block').attr('aria-hidden', false);
        } else {
          elem = self.$menu.find('> li:first').find('a').attr('href');

          self.$menu.find('> li:first').attr({
            'tabindex': 0,
            'aria-selected': true,
            'aria-expanded': true
          }).find(settings.childSelector).addClass(settings.activeClass);
          $(elem).css('display', 'block').attr('aria-hidden', false);
        }

        self.Action();
      };

      self.Action = function() {
        self.$menu.on(self._eAction, 'a', function(e){
          var _this = $(this),
          $target = _this.attr('href');

          if(!_this.hasClass(settings.activeClass)) {
            _this.addClass(settings.activeClass).closest('li').attr({
              'tabindex': 0,
              'aria-selected': true,
              'aria-expanded': true
            }).siblings().attr({
              'tabindex': -1,
              'aria-selected': false,
              'aria-expanded': false
            }).find('.' + settings.activeClass).removeClass(settings.activeClass);
            if( $( _this.attr('href') ) !=='#' && $(_this.attr('href')) !== '' ) {
              $( _this.attr('href') ).css('display', 'block').attr('aria-hidden', false).siblings('div' + ('.' + settings.tabContsClass) ).css('display', 'none').attr('aria-hidden', true);
            }
          }
          e.preventDefault();
        });
      };

      self._init = function(){
        if(!self.$menu.length) { return; }
        self._create();
      };


      self._init();
    });
  };


  $.fn.tabMenus.defaults = {
    startItem: 1, //처음 시작하는 탭
    tabMenuClass: 'ui_tabs_menu', // 탭 메뉴 클래스
    tabContsClass: 'ui_tabs_contents', // 탭 컨텐츠 클래스
    activeClass: 'is-current', // 탭 메뉴 활성화 클래스
    childSelector: '> a', // 링크 클래스
    event: 'click' //mouseenter, mouseover
  };

  $document.ready(function($){
    Ui.init();
  });
})(jQuery);
