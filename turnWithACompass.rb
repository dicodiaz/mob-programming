# https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2/train/ruby

# You have an 8-wind compass, like this:

# You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

# Return the direction you will face after the turn.

# Examples
# "S",  180  -->  "N"
# "SE", -45  -->  "E"
# "W",  495  -->  "NE"

def direction(facing, turn)
  degrees = {"N" => 0, "NE" => 45, "E" => 90, "SE" => 135, "S" => 180, "SW" => 225, "W" => 270, "NW" => 315}
  degreesFacing = degrees[facing]
  result = (degreesFacing + turn) % 360
  degrees.key(result)
end
