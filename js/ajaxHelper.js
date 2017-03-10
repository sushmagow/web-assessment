define([
	'jquery'
	],
	function ($) {
		return {
			ajaxCall: function (param) {
				var ajax = $.ajax({
					url: param.url,
					async: param.async
				}),
					results;

				ajax.done(function (response) {
					results = response;
				})
				.error(function (e) {
					console.log('ERROR: ', e);
				});

				return results;
			}
		};

	});