;(function(){
    $(window).on('load',function(){
        commentState()
        if(sessionStorage.getItem('dislike')){
            $('.article-eva').eq(1).find('i').css('color','#f60')
            
        }else if(sessionStorage.getItem('like')){
            $('.article-eva').eq(0).find('i').css('color','#f60')
            
        }
    })
    /*点击展开*/
    $('.article-unfold').on('click',function(){
        this.style.display='none';
        $('.article-content-warp').css({'height':'100%'})
    })

    /**评价状态 */
    
    function commentState(){
        if(!(sessionStorage.getItem('like') || sessionStorage.getItem('dislike'))){
            $('.article-eva').eq(0).on('click',function(){
                $(this).find('i').css('color','#f60')
                $('.article-eva').eq(1).off('click')
                likeCommentLocal()
            })
            $('.article-eva').eq(1).on('click',function(){
                $(this).find('i').css('color','#f60')
                $('.article-eva').eq(0).off('click')
                dislikeCommentLocal()
            })
        }
    }
    
    /**存储评价状态 */
    function likeCommentLocal(){
        sessionStorage.setItem('like','1')
    }
    function dislikeCommentLocal(){
        sessionStorage.setItem('dislike','1')
    }
    /**评论 */
    function pubCom(){
        var $val = $('.form-control').val()
        return $val
    }
    $('.article-button').on('click',function(){
        if(pubCom() == ''){
            alert('请输入评论')
        }else{
            alert('评论已发布')
        }
    })
    /*生成推荐文章节点*/
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
            var $Top = $('.guess .article-warp')[0].getBoundingClientRect().top
            var $artH = $('#article').height()
            var oLi = $('.guess li').length
            if($Top<$artH){
                $('.article-warp').append(buildGuessHtml())
            }
            if($Top<-900){
                $('footer').show()
            }else{
                $('footer').hide()
            }
        },500))
        
})()
    