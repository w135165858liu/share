;(function(){
    // $(window).on('load',function(){
    //     $(document).scrollTop('0px')
    // })
    /*点击展开*/
    $('.article-unfold').on('click',function(){
        this.style.display='none';
        $('.article-content-warp').css({'height':'100%'})
    })
    /*生成节点*/
    function buildGuessHtml(){
        var html = '';
        for(var i = 0;i<3;i++){
            html += '<li class="article-ad">'
            html +=     '<div class="row">'
            html +=         '<div class="col-xs-4">'
            html +=             '<img src="./img/article-ad1.png" alt="">'
            html +=         '</div>'
            html +=         '<div class="col-xs-8 htall">'
            html +=             '<p class="article-ad-message">'
            html +=                 '啊哈哈哈啊哈哈哈啊哈哈哈啊哈哈哈啊哈哈哈'
            html +=             '</p>'
            html +=             '<a href="javascrit:;" class="font-gray fr ad-reading">阅读'
            html +=                 '<i>10000+</i>'
            html +=             '</a>'
            html +=         '</div>'
            html +=     '</div>'
            html += '</li>'
        }
        return html
    }
    function buildGuessAdHtml(){
        var html = '';
            html += '<li class="guess-ad">'
            html +=     '<a href="#">'
            html +=     '<div class="guess-ad-bgimg"></div>'
            html += '</a>'
            html += '</li>'
        return html
    }
    /*生成广告*/
    /*防抖*/
    function debounce(fn,delay){
		var timer = 0;
		return function(){
			clearTimeout(timer);
			timer = setTimeout(fn,delay);
		}
    }
    /*模拟懒加载*/
    $(window).on('scroll',debounce(function(){
        var $Top = $('.guess .article-warp')[0].getBoundingClientRect().bottom
        var $artH = $('#article').height()
        var oLi = $('.guess li').length
        if($Top<$artH){
            $('.article-warp').append(buildGuessHtml())
        }
    },500))
    /**评价状态 */
    $('.article-eva').on('click',function(){
        $(this).find('i').css('color','#f60')
    })
    
})()
    