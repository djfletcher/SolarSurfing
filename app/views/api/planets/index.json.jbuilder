@planets.each do |planet|
  json.set! planet.id do
    json.partial! 'api/planets/planet', planet: planet
  end
end
