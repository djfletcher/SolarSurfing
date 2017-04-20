require 'http'

task ping: :environment do
  puts "Pinging..."
  HTTP.get('http://solarsurfing.space/')
  puts 'done.'
end
