;(function(){
    /**动态生成文章内容 */
    function creatHtml(){
        var html = '';
        for(var i = 0;i<data.length;i++){
            if(data[i].liClass == "article-ad"){
                 
                html += '<li class="'+data[i].liClass+'">'
                html +=      '<div class="row">'
                html +=          '<div class="col-xs-4">'
                if(data[i].imgSrc == ''){
                    html += ''
                }else{
                    html +=              '<img src="'+data[i].imgSrc+'" alt="">'
                }
                html +=          '</div>'
                html +=          '<div class="col-xs-8 htall">'
                html +=              '<p class="'+data[i].pClass+'">'
                html +=                  ''+data[i].pContent+''
                html +=              '</p>'
                html +=              '<a href="javascrit:;" class="font-gray fr ad-reading">阅读<i>'+data[i].read+'</i></a>'
                html +=          '</div>'
                html +=      '</div>'
                html += '</li>'
            }else if(data[i].liClass == "article-content-list"){
                html += '<li class="'+data[i].liClass+'">'
                html +=     '<div>'
                if(data[i].imgSrc == ''){
                    html += ''
                }else{
                    html +=         '<img src="'+data[i].imgSrc+'" alt="">'
                }
                html +=         '<a href="'+data[i].href+'" class="'+data[i].aClass+'"></a>'
                html +=         '<p>'
                html +=             ''+data[i].pContent+''
                html +=         '</p>'
                html +=     '</div>'
                html += '</li>'
            }
        }
        return html;
    }
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
    $(window).on('ready',function(){
        /**把文章节点插入页面 */
        $('.article-content-warp').html(creatHtml())
        commentState()
        if(sessionStorage.getItem('dislike')){
            $('.article-eva').eq(1).find('i').css('color','#f60')
            
        }else if(sessionStorage.getItem('like')){
            $('.article-eva').eq(0).find('i').css('color','#f60')
            
        }
    })
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
            $('.form-control').val('')
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
            if($Top<-400 && $Top > -600){
                $('footer').fadeIn();
                // $('.nav-menu').hide();
                $('.bottom-ad').show()
            }else if($Top<-600){
                // $('.nav-menu').show();
                $('.bottom-ad').hide()
            }
            else{
                $('footer').hide()
            }
        },500))
        
})()
    