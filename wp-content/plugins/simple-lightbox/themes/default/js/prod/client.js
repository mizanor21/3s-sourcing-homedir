window.SLB&&SLB.has_child("View.extend_theme")&&!function($){SLB.View.extend_theme("slb_default",{transition:{open:function(v,dfr){var l=v.get_layout().hide(),o=v.get_overlay().hide(),thm=this,v=v.dom_get();return v.find(".slb_content").css({width:"",height:""}).find(this.get_tag_selector()).hide(),v.find(".slb_details").height(0),v.show({always:function(){var pos={top_base:$(document).scrollTop()};document.documentElement.clientWidth>thm.get_breakpoint("small")&&(pos.top=pos.top_base+$(window).height()/2-l.height()/2,!(pos.top<pos.top_base))||(pos.top=pos.top_base),o.fadeIn({always:function(){l.css(pos),dfr.resolve()}})}}),dfr.promise()},close:function(v,dfr){function reset(){c.width("").height(""),l.css("opacity",""),dfr.resolve()}var pos,anims,l=v.get_layout(),c=l.find(".slb_content");return v.animation_enabled()&&document.documentElement.clientWidth>this.get_breakpoint("small")?(anims={layout:{opacity:0,top:$(document).scrollTop()+$(window).height()/2},content:{width:0,height:0},speed:"fast"},pos=l.animate(anims.layout,anims.speed).promise(),anims=c.animate(anims.content,anims.speed).promise(),$.when(pos,anims).done(function(){v.get_overlay().fadeOut({always:function(){reset()}})})):(l.css("opacity",0),reset()),dfr.promise()},load:function(v){return v.get_layout().find(".slb_loading").show(),(document.documentElement.clientWidth>this.get_breakpoint("small")?v.get_layout().fadeIn():v.get_layout().show()).promise()},unload:function(v,dfr){var v=v.get_layout(),det=v.find(".slb_details"),v=v.find(".slb_content "+this.get_tag_selector());return det.css({height:0}),v.hide(),$.when(det.promise(),v.promise()).done(function(){dfr.resolve()}),dfr.promise()},complete:function(v,dfr){var dims_item,dims_det_height,pos,thm,v=v.get_layout(),loader=v.find(".slb_loading"),det=v.find(".slb_details"),det_data=det.find(".slb_data"),c=v.find(".slb_content"),c_tag=c.find(this.get_tag_selector());return document.documentElement.clientWidth>this.get_breakpoint("small")?(dims_item=this.get_item_dimensions(),det.width(dims_item.width),dims_det_height=det_data.outerHeight(),det.width(""),(pos={top_base:$(document).scrollTop()}).top=pos.top_base+$(window).height()/2-(dims_det_height+dims_item.height)/2,pos.top<pos.top_base&&(pos.top=pos.top_base),pos=v.animate(pos,"fast").promise(),dims_item=c.animate(dims_item,"fast").promise(),thm=this,$.when(pos,dims_item).done(function(){loader.fadeOut("fast",function(){c.find(thm.get_tag_selector("item","content")).fadeIn(function(){c_tag.show(),det.animate({height:det_data.outerHeight()},"slow").promise().done(function(){det.height(""),dfr.resolve()})})})})):(loader.hide(),c_tag.show(),det.height(""),dfr.resolve()),dfr.promise()}}})}(jQuery);