;(function (window, document, $) {
  "use strict";
  
  // 전체 공통 탭 메뉴
  $.fn.tabMenus = function (options) {
    var settings = $.extend({}, $.fn.tabMenus.defaults, options || {});
    var self = this;

    return self.each(function () {
      var $selector = $(this),
          $menu = $selector.find('> .' + settings.tabMenuClass),
          $wrap = $selector.find('> .' + settings.tabContWrapClass + ':first'),
          $contents = $wrap.find('.' + settings.tabContsClass),
          activateClass = settings.activeClass,
          _eAction = settings.event;
        
      var _isHref = function() {
        var rhash = /#.*$/;

        return function(anchor)  {
          var anchorUrl, locationUrl;
          
          anchorUrl = anchor.href.replace(rhash, '');
          locationUrl = location.href.replace(rhash, '');

          try {
            anchorUrl = decodeURIComponent(anchorUrl);
          } catch (error) {}
          try {
            locationUrl = decodeURIComponent(locationUrl);
          } catch(error) {}

          return anchor.hash.length > 1 && anchorUrl === locationUrl;
        };
      };

      var _create = function () { // 기본세팅
        $($contents).css('display', 'none');
        $menu.attr('role', 'tablist');
        $menu.find('> li').each(function () {
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
        $contents.each(function () {
          var _this = $(this);
          _this.attr({
            'role': 'tabpanel',
            'aria-hidden': true
          });
        });

        _isLocal();
      };

      var _isLocal = function () { //재설정
        var elem;
        if (settings.startItem > 1) {
          elem = $menu.find('> li:nth-child(' + settings.startItem + ') ').find('a').attr('href');

          $menu.find('.' + activateClass).attr({
            'aria-selected': false,
            'aria-expanded': false
          }).removeClass(activateClass);
          $menu.find('> li:nth-child(' + settings.startItem + ') ').attr({
            'tabindex': 0,
            'aria-selected': true,
            'aria-expanded': true
          }).find('a').addClass(activateClass);
          $(elem).css('display', 'block').attr('aria-hidden', false);
        } else {
          elem = $menu.find('> li:first').find('a').attr('href');

          $menu.find('> li:first').attr({
            'tabindex': 0,
            'aria-selected': true,
            'aria-expanded': true
          }).find('a').addClass(activateClass);
          $(elem).css('display', 'block').attr('aria-hidden', false);
        }

        _eventActive();
      };

      var _eventActive = function () {
        $menu.on(_eAction, 'a', function (e) {
          var _this = $(this),
            $target = '#' + $menu.find('> li').attr('aria-controls');

          if (!_this.hasClass(activateClass)) {
            _this.addClass(activateClass).closest('li').attr({
              'tabindex': 0,
              'aria-selected': true,
              'aria-expanded': true
            }).siblings().attr({
              'tabindex': -1,
              'aria-selected': false,
              'aria-expanded': false
            }).find('.' + activateClass).removeClass(activateClass);
            if ($(_this.attr('href')) !== '#' || $(_this.attr('href')) !== '#none' || $(_this.attr('href')) !== '') {
              $(_this.attr('href')).css('display', 'block').attr('aria-hidden', false).siblings('div' + ('.' + settings.tabContsClass)).css('display', 'none').attr('aria-hidden', true);
            } else {
              _this.attr('href', $target);
            }
          }

          return false;
        });
      };

      var _init = function () {
        if (!$menu.length) { return; }
        _create();
      };


      _init();
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