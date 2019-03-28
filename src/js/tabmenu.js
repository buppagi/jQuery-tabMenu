;(function (window, document, $) {
  "use strict";
  
  // 전체 공통 탭 메뉴
  $.fn.tabMenus = function (options) {
    var settings = $.extend(true, {}, $.fn.tabMenus.defaults, options);
    var self = this;

    return self.each(function () {
      self.$selector = $(this);
      self.$menu = self.$selector.find('.' + settings.tabMenuClass);
      self.$wrap = self.$selector.find('.' + settings.tabContWrapClass + ':first');
      self.$contents = self.$wrap.find('.' + settings.tabContsClass);
      self._eAction = settings.event;

      self._create = function () { // 기본세팅
        $(self.$contents).css('display', 'none');
        self.$menu.attr('role', 'tablist');
        self.$menu.find('> li').each(function () {
          var _this = $(this);
          _this.attr({
            'role': 'tab',
            'tabindex': -1,
            'aria-selected': false,
            'aria-expanded': false
          }).find('a').attr({
            'role': 'presentation',
            'tabindex': -1
          }).addClass('tabs-anchor');
        });
        self.$contents.each(function () {
          var _this = $(this);
          _this.attr({
            'role': 'tabpanel',
            'aria-hidden': true
          });
        });

        self._isLocal();
      };

      self._isLocal = function () { //재설정
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
          }).find('a').addClass(settings.activeClass);
          $(elem).css('display', 'block').attr('aria-hidden', false);
        } else {
          elem = self.$menu.find('> li:first').find('a').attr('href');

          self.$menu.find('> li:first').attr({
            'tabindex': 0,
            'aria-selected': true,
            'aria-expanded': true
          }).find('a').addClass(settings.activeClass);
          $(elem).css('display', 'block').attr('aria-hidden', false);
        }

        self.Action();
      };

      self.Action = function () {
        self.$menu.on(self._eAction, 'a', function (e) {
          var _this = $(this),
            $target = '#' + self.$menu.find('> li').attr('aria-controls');

          if (!_this.hasClass(settings.activeClass)) {
            _this.addClass(settings.activeClass).closest('li').attr({
              'tabindex': 0,
              'aria-selected': true,
              'aria-expanded': true
            }).siblings().attr({
              'tabindex': -1,
              'aria-selected': false,
              'aria-expanded': false
            }).find('.' + settings.activeClass).removeClass(settings.activeClass);
            if ($(_this.attr('href')) !== '#' || $(_this.attr('href')) !== '#none' || $(_this.attr('href')) !== '') {
              $(_this.attr('href')).css('display', 'block').attr('aria-hidden', false).siblings('div' + ('.' + settings.tabContsClass)).css('display', 'none').attr('aria-hidden', true);
            } else {
              _this.attr('href', '#' + self.$menu.find('> li').attr('aria-controls'));
            }
          }

          return false;
        });
      };

      self._init = function () {
        if (!self.$menu.length) { return; }
        self._create();
      };


      self._init();
    });
  };


  $.fn.tabMenus.defaults = {
    startItem: 1,
    tabMenuClass: 'ui_tabs_menu',
    tabContWrapClass: 'ui_tabs_contents_wrap',
    tabContsClass: 'ui_tab_content',
    activeClass: 'is-current',
    event: 'click' //mouseenter, mouseover
  };
})(window, document, jQuery);