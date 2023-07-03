![ChatZone](https://user-images.githubusercontent.com/100665876/232448053-3d23a4ef-3851-4fcc-96b6-b40c449d61f9.jpeg)

# Description
💬 ChatZone is a chat app with rooms, messages, styled input forms & user to user real time communication made with with Rails 7 using Turbo & Stimulus.

# Features
- Users can choose to enter multiple chat rooms or make a new room:

![chatzone-index](https://user-images.githubusercontent.com/100665876/213108626-55c1a6df-4873-4292-a8b8-3a7e6bd5c819.jpeg)

- Here user Joel chats with user John:

![ChatZone-show](https://user-images.githubusercontent.com/100665876/213362780-c1032945-6c06-4fe8-8955-5e6dff309869.jpeg)

- Here is the message model:

```
class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room

  after_commit { broadcast_append_to "room_#{room.id}" }
end
```

- Here is the message view:

```
<%= turbo_frame_tag(dom_id(message)) do %>
  <div class="row">
    <%= "#{message.user.email.split('@')[0].capitalize}: #{message.body}" %>
  </div>
<% end %>
```

- Here is the room view:

```
<div id="<%= dom_id room %>" data-controller="messages">
<%= turbo_stream_from dom_id(room) %>
  <h1 class="text-center"><%= room.name %></h1>
  <div id="messages" data-messages-target="container">
    <% @messages&.each do |message| %>
      <%= render "messages/message", message: message %>
    <% end %>
  </div>
  <div id="new_message">
    <%= render "messages/form", room: room %>
  </div>
</div>
```

## Please initialize these before starting the app:

### Versions


![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white) 3.0.3

![Ruby on Rails](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white) 7.0.4

```
 git clone git@github.com:guavalines/ChatZone.git
 cd ChatZone
 rails db:create db:migrate db:seed:replant
 bundle install
 yarn install
 rails server
 ```
 
 To have two different users talk with each other, type bin/dev in your console for user 1 and open your browser and visit localhost:3000 for user 2.
