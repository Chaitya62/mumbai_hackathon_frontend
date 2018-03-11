var getRequestPromise = (requestUrl, data) => {
	return new Promise( (resolve, reject) => {
		$.ajax({
			type: "POST",
			data: data,
			dataType: 'json',
			url: requestUrl,
			success: result => {
				resolve({success: "success"})
			},
			error: (jqXHR, textStatus, errorThrown) => {
				reject(errorThrown);
			},
		});
	});
};

export default getRequestPromise;