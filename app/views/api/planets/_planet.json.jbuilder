json.extract! planet, :id, :name, :description, :image_url
# json.hosts planet.hosts, partial: 'api/hosts/host', as: :host
json.hosts planet.hosts.each do |host|
  json.partial! 'api/hosts/host', host: host
end
