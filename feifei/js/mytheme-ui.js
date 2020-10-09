/*!
 * 版本：MYUI Copyright © 2019
 * 作者：QQ726662013版权所有
 * 官网：https://www.mytheme.cn
 */

var MyTheme = {
	'Browser': {
		url: document.URL,
		domain: document.domain,
		title: document.title,
		language: (navigator.browserLanguage || navigator.language).toLowerCase(),
		canvas: function() {
			return !!document.createElement("canvas").getContext
		}(),
		useragent: function() {
			var a = navigator.userAgent;
			return {
				mobile: !! a.match(/AppleWebKit.*Mobile.*/),
				ios: !! a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: -1 < a.indexOf("Android") || -1 < a.indexOf("Linux"),
				iPhone: -1 < a.indexOf("iPhone") || -1 < a.indexOf("Mac"),
				iPad: -1 < a.indexOf("iPad"),
				trident: -1 < a.indexOf("Trident"),
				presto: -1 < a.indexOf("Presto"),
				webKit: -1 < a.indexOf("AppleWebKit"),
				gecko: -1 < a.indexOf("Gecko") && -1 == a.indexOf("KHTML"),
				weixin: -1 < a.indexOf("MicroMessenger")
			}
		}()
	},
	'Cookie': {
		'Set':function(name,value,days){
	        var expires;
	        if (days) {
	            expires = days;
	        } else{
	            expires = "";
	        }
	        $.cookie(name,value,{expires:expires,path:'/'});
		},
		'Get':function(name){
			var styles = $.cookie(name);
		    return styles;
		},
		'Del':function(name,tips){
			if(window.confirm(tips)){
	            $.cookie(name,null,{expires:-1,path: '/'});
	            location.reload();
	       	}else{
	            return false;
	        }
		}
	},
	'Ajax':function(url,type,dataType,data,sfun,efun,cfun){
        type=type||'get';
        dataType=dataType||'json';
        data=data||'';
        efun=efun||'';
        cfun=cfun||'';

        $.ajax({
            url:url,
            type:type,
            dataType:dataType,
            data:data,
            timeout: 5000,
            beforeSend:function(XHR){
            },
            error:function(XHR,textStatus,errorThrown){
                if(efun) efun(XHR,textStatus,errorThrown);
            },
            success:function(data){
                sfun(data);
            },
            complete:function(XHR, TS){
                if(cfun) cfun(XHR, TS);
            }
        })
    },
	'Mobile': {	
		'Nav': {
			'Init': function() {
				if($(".nav-slide").length){
					$(".nav-slide").each(function(){
						var $that = $(this);
	                	MyTheme.Mobile.Nav.Set($that,$that.attr('data-align'));
	                });
				}
			},
			'Set': function(id,align) {
				$index = id.find('.active').index()*1;
				if($index > 3){
					$index = $index-3;
				}else{
					$index = 0;
				}
				id.flickity({
				  	cellAlign: align,
					freeScroll: true,
					contain: true,
					prevNextButtons: false,				
					pageDots: false,
					percentPosition: true,
					initialIndex: $index
				});	
			}	
		},
		'Mshare': function() {
			$(".open-share").click(function() {
				MyTheme.Browser.useragent.weixin ? $("body").append('<div class="mobile-share share-weixin"></div>') : $("body").append('<div class="mobile-share share-other"></div>');
				$(".mobile-share").click(function() {
					$(".mobile-share").remove();
					$("body").removeClass("modal-open");
				});
			});
		}
	},
	'Images': {
		'Lazyload': function() {
			$(".lazyload").lazyload({
				effect: "fadeIn",
				threshold: 200,
				failure_limit : 10,
				skip_invisible : false
			});
		},
		'Qrcode': {
			'Init': function() {
				if($("#qrcode").length){
					var $that = $("#qrcode");
	                MyTheme.Images.Qrcode.Set($that.attr('data-link'),$that.attr('data-dark'),$that.attr('data-light'));
	                $that.attr("class","img-responsive");
				}
			},
			'Set':  function(url,dark,light) {
				url=0||location.href;
				var qrcode = new QRCode('qrcode', {
				  	text: url,
				  	width: 120,
				  	height: 120,
				  	colorDark : dark,
				  	colorLight : light,
				  	correctLevel : QRCode.CorrectLevel.H
				});
			}	
		},
		'Flickity': {
			'Init': function() {
				if($(".flickity").length){
					$(".flickity").each(function(){
						var $that = $(this);
	                	MyTheme.Images.Flickity.Set($that,$that.attr('data-align'),$that.attr('data-dots'),$that.attr('data-next'),$that.attr('data-play'));
						$(this).click(function() {
							$(".lazyload").lazyload();
						});
	                });
				}
			},
			'Set': function(id,align,dots,next,play) {
				dots=dots||false;
				next=next||false;
				play=play||false;
				id.flickity({
				  	cellAlign: align,
				  	wrapAround: true,
				  	contain: true,
				  	pageDots: dots,
					autoPlay: play,
				  	percentPosition: true,
				  	prevNextButtons: next
				});	
			}	
		}
	},
	'Link': {
		'Copy': {
			'Init': function() {
				$(".myui-copy-link").each(function(){
					var links = $(this).attr("data-url");
					MyTheme.Link.Copy.Set(this,links);
				});
				$(".myui-copy-html").each(function(){
					var html = $(this).parent().find(".content").html();
					MyTheme.Link.Copy.Set(this,html);
				});
			},
			'Set': function(id,content) {
				var clipboard = new Clipboard(id, {
					text: function() {									
						return content;
					}
				});
				clipboard.on('success', function(e) {
					layer.msg('复制成功');
				});
				clipboard.on("error",function(e){
				    layer.msg('复制失败，请手动复制');
				});
			}
			
		},
		'Short': function(){
			$(".myui-short").each(function(){
				var codyId = this;
				var shortId = $(this);
				var shortUrl = shortId.val() || shortId.attr("data-url");
				var linkText = shortId.attr("data-text");
				if(myui.short==1){
					$.ajax({
						type : 'GET',
						url : myui.shortapi+encodeURIComponent(shortUrl),
						dataType : 'jsonp',
						success : function(r) {
							url_short = r.data.urls[0].url_short;
							if(shortId.val()){
								shortId.val(linkText+url_short);
							}else if(shortId.attr("data-url")){
								shortId.attr("data-url",url_short);
								MyTheme.Link.Copy.Set(codyId,linkText+url_short);
							}
						}
					});
				}else{
					if(shortId.val()){
						shortId.val(linkText+shortUrl);
					}else if(shortId.attr("data-url")){
						shortId.attr("data-url",shortUrl);
						MyTheme.Link.Copy.Set(codyId,linkText+shortUrl);
					}	
				}
			});
		}
	},
	'Layer': {
		'Img': function(title,src,text) {
			layer.open({
	   			type: 1,
		    	title: title,
		  		skin: 'layui-layer-rim',
		  		content: '<div class="col-pd"><p><img src="'+src+'" width="240" /></p><p class="text-center">'+text+'</p></div>'
		    });
		},
		'Html': function(title,html) {
			layer.open({
	   			type: 1,
		    	title: title,
		  		skin: 'layui-layer-rim',
		  		content: '<div class="col-pd">'+html+'</div>'
		    });
		},
		'Div': function(id) {
			layer.open({
				type: 1,
				title:false,
				skin: 'layui-layer-rim',
				content: $(id)
			});
		},
		'Popbody': function(name,html,day,wide,high) {
			var pop_is = MyTheme.Cookie.Get(name);
			var html = $(html).html();
			if(!pop_is){
				layer.open({
					type: 1,
					title: false,
					//skin: 'layui-layer-rim',
					content: html,
					area: [wide+'px', high+'px'],
					cancel: function(){
						MyTheme.Cookie.Set(name,1,day);
					}
				});
			}
		}
	},
	'Other': {
		'Headroom': function() {
			if($("#header-top").length){
				var header = document.querySelector("#header-top");
	            var headroom = new Headroom(header, {
					tolerance: 5,
					offset: 205,
					classes: {
						initial: "top-fixed",
						pinned: "top-fixed-up",
						unpinned: "top-fixed-down"
					}
				});
				headroom.init();
			}
			
		},
		'Popup': function(id) {
			$(id).addClass("popup-visible");
			$("body").append('<div class="mask"></div>').addClass("hidden");
			$(".close-popup").click(function() {
				$(id).removeClass("popup-visible");
				$(".mask").remove();
				$("body").removeClass("hidden");
			});
			$(".mask").click(function() {
				$(id).removeClass("popup-visible");
				$(this).remove();
				$("body").removeClass("hidden");
			});
		},
		'Bootstrap': function() {
			$('a[data-toggle="tab"]').on("shown.bs.tab", function(a) {
				var b = $(a.target).text();
				$(a.relatedTarget).text();
				$("span.active-tab").html(b);
				$(".lazyload").lazyload();
			});
		},
		'Skin': function() {
			var skinnum = 0,act;
		    var lengths = $("link[name='skin']").length;
		    $('.btnskin').click(function() {
		        skinnum+=1;
		        if(skinnum==lengths){skinnum=0;}
		        var skin = $("link[name='skin']").eq(skinnum).attr("href");
		        layer.msg("正在切换皮肤，请稍后...",{anim:5,time: 2000},function(){
		        	$("link[name='default']").attr({href:skin});
		        });
		        MyTheme.Cookie.Set('skinColor',skin,365);
		    });
		    var color = MyTheme.Cookie.Get('skinColor');
		    if(color){
		        $("link[name='default']").attr({href:color});
		    }  
		},
		'Sort': function() {
			$(".sort-button").each(function(){
				$(this).on("click",function(e){
					e.preventDefault();
					$(this).parent().parent().parent().find(".sort-list").each(function(){
					    var playlist=$(this).find("li");
					    for(let i=0,j=playlist.length-1;i<j;){
					        var l=playlist.eq(i).clone(true);
					        var r=playlist.eq(j).replaceWith(l);
					        playlist.eq(i).replaceWith(r);
					        ++i;
					        --j;
					    }
					});
				});
			});
		},
		'Search': function() {		    	
			$(".search-select p,.search-select li").click(function() {
	    		var action =$(this).attr("data-action");
	    		$("#search").attr("action",action);
	    		$(".search-select .text").text($(this).html());
		    });			
			$(".search_submit").click(function() {
	    		var value=$(".search_wd").val();
                if (!value) {
                    var wd=$(".search_wd").attr("placeholder");
                    $(".search_wd").val(wd);
                }
	    	});
	    	$(".open-search").click(function(){
				var seacrhBox=$(".search-box");
				seacrhBox.addClass("active").siblings().hide();
				seacrhBox.find(".form-control").focus();
				seacrhBox.find(".head-dropdown").toggle();
				$(".search-close").click(function(){
					seacrhBox.removeClass("active").siblings().show();
					seacrhBox.find(".dropdown-box").hide();
				});
			});	
		},
		'Collapse': function() {
			$(".text-collapse").each(function(){
				$(this).find(".details").on("click",function(){
					$(this).parent().find(".sketch").addClass("hide");
					$(this).parent().find(".data").css("display","");
					$(this).remove();
				});
			});
			$(".dropdown-hover").click(function(){
				$(this).find(".dropdown-box").toggle();
			});
		},
		'Scrolltop': function() {
			var a = $(window);
			$scrollTopLink = $("a.backtop");
			a.scroll(function() {
				500 < $(this).scrollTop() ? $scrollTopLink.css("display", "") : $scrollTopLink.css("display", "none");
			});
			$scrollTopLink.on("click", function() {
				$("html, body").animate({
					scrollTop: 0
				}, 400);
				return true;
			});
		},
		'Slidedown': function() {
			var display = $('.slideDown-box');
			
			$(".slideDown-btn").click(function() {
				
		  		if(display.css('display') == 'block'){
		  			display.slideUp("slow");
		  			$(this).html('展开  <i class="fa fa-angle-down"></i>');
				}else{
					display.slideDown("slow"); 
					$(this).html('收起   <i class="fa fa-angle-up"></i>');
				}
			});
		},
		'History': {
			'Init':function(){
				if($(".vod_history").length){
	                var $that = $(".vod_history");
	                MyTheme.Other.History.Set($that.attr('data-name'),$that.attr('data-link'),$that.attr('data-pic'),$that.attr('data-part'),$that.attr('data-limit'));
	            }
			},
			'Set':function(name,link,pic,part,limit){
				if(!link){ link = document.URL;}
				var history = MyTheme.Cookie.Get("history");
			    var len=0;
			    var canadd=true;
			    if(history){
			        history = eval("("+history+")"); 
			        len=history.length;
			        $(history).each(function(){
			            if(name==this.name){
			                canadd=false;
			                var json="[";
			                $(history).each(function(i){
			                    var temp_name,temp_img,temp_url,temp_part;
			                    if(this.name==name){
			                        temp_name=name;temp_img=pic;temp_url=link;temp_part=part;
			                    }else{
			                        temp_name=this.name;temp_img=this.pic;temp_url=this.link;temp_part=this.part;
			                    }
			                    json+="{\"name\":\""+temp_name+"\",\"pic\":\""+temp_img+"\",\"link\":\""+temp_url+"\",\"part\":\""+temp_part+"\"}";
			                    if(i!=len-1)
			                    json+=",";
			                })
			                json+="]";
			                MyTheme.Cookie.Set('history',json,365);
			                return false;
			            }
			        });
			    }
			    if(canadd){
			        var json="[";
			        var start=0;
			        var isfirst="]";
			        isfirst=!len?"]":",";
			        json+="{\"name\":\""+name+"\",\"pic\":\""+pic+"\",\"link\":\""+link+"\",\"part\":\""+part+"\"}"+isfirst;
			        if(len>limit-1)
		            	len-=1;
		        	for(i=0;i<len-1;i++){
		            	json+="{\"name\":\""+history[i].name+"\",\"pic\":\""+history[i].pic+"\",\"link\":\""+history[i].link+"\",\"part\":\""+history[i].part+"\"},";
		       	 	}
		        	if(len>0){
		            	json+="{\"name\":\""+history[len-1].name+"\",\"pic\":\""+history[len-1].pic+"\",\"link\":\""+history[len-1].link+"\",\"part\":\""+history[len-1].part+"\"}]";
		        	}
			        MyTheme.Cookie.Set('history',json,365);
			    }  
			}
		},
		'Player': function() {
			if($("#player-left").length){
				var PlayerLeft = $("#player-left");
		    	var PlayerSide = $("#player-sidebar");
				var LeftHeight = PlayerLeft.outerHeight();
				var Position = $("#playlist li.active").position().top;
				$("#player-sidebar-is").click(function() {
					PlayerSide.toggle();
					if(PlayerSide.css("display")==='none') {
						PlayerLeft.css("width","100%");
						$(this).html("<i class='fa fa-angle-left'></i>");
					}	
					if(PlayerSide.css("display")==='block') {
						PlayerLeft.css("width","");
						$(this).html("<i class='fa fa-angle-right'></i>");
					}
				});
				if(!MyTheme.Browser.useragent.mobile){
					PlayerSide.css({"height":LeftHeight,"overflow":"auto"});
					PlayerSide.scrollTop(Position);
				}
				PlayerSide.scroll(function(){
					$(".lazyload").lazyload();
				});
			}		
			if($(".player-fixed").length){
				if(!MyTheme.Browser.useragent.mobile){
					$(window).scroll(function(){
						if($(window).scrollTop()>window.outerHeight){
							$(".player-fixed").addClass("fixed fadeInDown");
							$(".player-fixed-off").show();
							$(".close-box").hide();
						}else if($(window).scrollTop()<window.outerHeight){
							$(".player-fixed").removeClass("fixed fadeInDown");
							$(".player-fixed-off").hide();
							$(".close-box").show();
						}
					});
				}
				$(".player-fixed-off").click(function() {
					$(".player-fixed").removeClass("fixed fadeInDown");
				});
			}
			
		},
		'Close': function() {
			$(".close-btn").on("click",function(){
				$(this).parents(".close-box").remove();
			});
		},
		'Roll': function(obj,higt,time) {
			setInterval(function(){ 
				$(obj).find("ul").animate({
					marginTop : higt,
				},time,function(){
					$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
				})
			}, 3000);
		},
		'Xunlei': function() {
			$.getScript(myui.thunderurl, function() {

				$(".common_down").on("click",function(){
					var link=$(this).parents("li").find("input[type='text']");
					var url=link.eq(0).val();
					var filename=$(this).parents("li").find(".text").eq(0).text();
					thunderLink.newTask({
						downloadDir: '下载目录',
						tasks: [{
							name: filename,
							url: url,
							size: 0
						}]
					});
				});

				$("input[name='checkall']").on("click",function(e){
					var checkboxs=$(this).parent().parent().parent().parent().find("input[name^='down_url_list_']");
					for(let i=checkboxs.length;i--;)
						checkboxs[i].checked=this.checked;
				});
		
				$(".thunder_down_all").on("click",function(){
					checked=$(this).parents(".downlist").find("li input[type='checkbox']:checked");
					
					if(checked.length<1){
							layer.msg("请选中要下载的文件");
						}
					else
						{
							var tasks=[];
							var links=$(this).parents(".downlist").find("li .down_url");
							var selectbox=$(this).parents(".downlist").find("li input[type='checkbox']");
				
							for(let i=0;i<links.length;++i){
								if(selectbox.eq(i).is(':checked')){
									var task={
										url:links.eq(i).val(),
										size:0
									};
									tasks.push(task);
								}
							}
									
							thunderLink.newTask({
								downloadDir: '下载目录',
								installFile: '',
								taskGroupName: '下载文件',
								tasks: tasks,
								excludePath: ''
						   });           	
					}
					
				});
			
				//启动迅雷看看
				if($(".thunderkk").length){
					$(".thunderkk").on("click",function(){
						var link=$(this).parents(".downlist").find("li .down_url");
						var url=link.eq(0).val();
						kkPlay(url,"");
					});        
				
					var kkDapCtrl = null;
					
					function kkGetDapCtrl() {
						if (null == kkDapCtrl) {
							try {
								if (window.ActiveXObject) {
									kkDapCtrl = new ActiveXObject("DapCtrl.DapCtrl");
								} else {
									var browserPlugins = navigator.plugins;
									for (var bpi = 0; bpi < browserPlugins.length; bpi++) {
										try {
											if (browserPlugins[bpi].name.indexOf('Thunder DapCtrl') != -1) {
												var e = document.createElement("object");
												e.id = "dapctrl_history";
												e.type = "application/x-thunder-dapctrl";
												e.width = 0;
												e.height = 0;
												document.body.appendChild(e);
												break;
											}
										} catch(e) {}
									}
									kkDapCtrl = document.getElementById('dapctrl_history');
								}
							} catch(e) {}
						}
						return kkDapCtrl;
					}
					function kkPlay(url, moviename) {
						var dapCtrl = kkGetDapCtrl();
						try {
							var ver = dapCtrl.GetThunderVer("KANKAN", "INSTALL");
							var type = dapCtrl.Get("IXMPPACKAGETYPE");
							if (ver && type && ver >= 672 && type >= 2401) {
								dapCtrl.Put("SXMP4ARG", '"' + url + '" /title "' + moviename + '" /startfrom "_web_xunbo" /openfrom "_web_xunbo"');
							} else {
								var r = confirm("\u8bf7\u5148\u4e0b\u8f7d\u5b89\u88c5\u8fc5\u96f7\u770b\u770b\uff0c\u70b9\u786e\u5b9a\u8fdb\u5165\u8fc5\u96f7\u770b\u770b\u5b98\u7f51\u4e0b\u8f7d");
								if (r == true) {
									window.open('http://www.kankan.com/app/xmp.html','','');
								}
							}
						} catch(e) {
							var r = confirm("\u8bf7\u5148\u4e0b\u8f7d\u5b89\u88c5\u8fc5\u96f7\u770b\u770b\uff0c\u70b9\u786e\u5b9a\u8fdb\u5165\u8fc5\u96f7\u770b\u770b\u5b98\u7f51\u4e0b\u8f7d");
							if (r == true) {
								window.open('http://www.kankan.com/app/xmp.html','','');
							}
						}
					}
				}
			});
			$(".Codyurl").each(function(){
				var downurl = $(this).attr("data-text");
				MyTheme.Link.Copy.Set(this,downurl);
			});
		},
		'Language':function(){
			
			String.prototype.s2t = function() {
				var k='';
				for(var i=0;i<this.length;i++){
					var c = this.charAt(i);
					var p = simple().indexOf(c)
					k += p < 0 ? c : traditional().charAt(p);
				}
				return k;
			 }
			 
			 String.prototype.t2s = function() {			 
					var k='';
					for(var i=0;i<this.length;i++){
						var c = this.charAt(i);
						var p = traditional().indexOf(c)
						k += p < 0 ? c : simple().charAt(p);
					}
			      return k;
			 }
			 
			function s2t() {
				document.body.innerHTML = document.body.innerHTML.s2t();
			}
			
			function t2s() {
			    document.body.innerHTML = document.body.innerHTML.t2s();
			}
			
			var language = MyTheme.Cookie.Get('language')||myui.language;
			if (language == 1) {
				s2t();
			} else {
				t2s();
			}
			
			$('.language').click(function() {
				if (language == 0) {
					layer.msg("正在切换繁体，请稍后...",{anim:5,time: 2000},function(){
						s2t();
						window.location.reload();
					});
					MyTheme.Cookie.Set('language',1,365);
				} else {
					layer.msg("正在切换简体，请稍后...",{anim:5,time: 2000},function(){
						t2s();
						window.location.reload();
					});
					MyTheme.Cookie.Set('language',0,365);
				}
			});
			
		}
	}	
};

$(function(){
	if(MyTheme.Browser.useragent.mobile){
		MyTheme.Mobile.Nav.Init();
		MyTheme.Mobile.Mshare();
	}
	MyTheme.Images.Lazyload();
	MyTheme.Images.Flickity.Init();	
	MyTheme.Link.Copy.Init();
	MyTheme.Link.Short();
	MyTheme.Other.Bootstrap();
	MyTheme.Other.Sort();
	MyTheme.Other.Search();
	MyTheme.Other.Collapse();
	MyTheme.Other.Slidedown();
	MyTheme.Other.Scrolltop();
	MyTheme.Other.History.Init();
	MyTheme.Other.Player();
	MyTheme.Other.Close();
	MyTheme.Other.Xunlei();
	
});