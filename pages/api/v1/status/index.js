function status(request, response) {
  response.status(200).json({ chave: "função status chamada" });
}

export default status;
