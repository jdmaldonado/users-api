'use stric';

const handleError = (res, error) => {
	res.status(500).json({
		status: 500,
		success: false,
		error: error.message || JSON.stringify(error),
	});
}

const handleBadRequest = (res, error) => {
	res.status(400).json({
		status: 400,
		success: false,
		error: error.message || JSON.stringify(error),
	});
}

const handleSucess = (res, data) => {
	res.status(200).json({
		status: 200,
		success: false,
		error: null,
		data
	});
}

module.exports = {
	handleError,
  handleBadRequest,
  handleSucess,
}