`couchapp push`

watch( 'shows/.*js$') {|match_data|
  `couchapp push` unless match_data[0] =~ /\.sw.$/
}
watch( 'views/.*js$') {|match_data|
  `couchapp push` unless match_data[0] =~ /\.sw.$/
}
watch( '.html$') {|match_data|
  `couchapp push` unless match_data[0] =~ /\.sw.$/
}
watch( '.*testData/.*$') {|match_data|
  `couchapp push` unless match_data[0] =~ /\.sw.$/
}
watch( '.*\.json$') {|match_data|
  `couchapp push` unless match_data[0] =~ /\.sw.$/
}
watch( '(.*\.coffee$)' ) {|match_data|
  puts match_data[0]
  result = `coffee --bare --compile #{match_data[0]} 2>&1`
  error = false
  result.each_line{|line|
    if line.match(/In /)  then
      error = true
      puts line
    end
  }
  if not error
    puts "Success!"
    `make combined`
    `couchapp push`
  end
}
