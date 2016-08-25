class StaticPagesController < ApplicationController
  def root
  end
end


# $.ajax({
#   url: 'api/todos',
#   type: "GET",
#   datatype: 'json',
#   success(data) {
#     console.log(":");
#     console.log(data);
#   }
# });
#

# $.ajax({
#   url: 'api/todos',
#   type: "POST",
#   datatype: 'json',
#   data: {
#     todo: {
#       title: "POST YEAH",
#       body: "FOREST!",
#       done: false
#     }
#   },
#   success(data) {
#     console.log("FOREST created!");
#     console.log("issued id: " + data.id);
#   }
# });
