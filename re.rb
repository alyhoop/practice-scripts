def re(i)
  sleep 1
  if i > 126
    return
  else
    puts i
    re(i + 1)
  end
end

i = ARGV[0].to_i

re(i)
