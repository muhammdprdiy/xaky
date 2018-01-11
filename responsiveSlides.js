				$(function () {
					$(&quot;#slider&quot;).responsiveSlides({
						auto: true,
						pager: true,
						nav: true,
						speed: 1000,
						namespace: &quot;callbacks&quot;,
						before: function () {
							$(&#39;.events&#39;).append(&quot;<li>before event fired.</li>&quot;);
						},
						after: function () {
							$(&#39;.events&#39;).append(&quot;<li>after event fired.</li>&quot;);
						}
					});
				});
