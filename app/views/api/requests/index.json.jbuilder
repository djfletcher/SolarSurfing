@requests.each do |request|
  json.set! request.id do
    json.partial! 'api/requests/request', request: request
  end
end
