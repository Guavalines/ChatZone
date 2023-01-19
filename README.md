# CHATZONE

ChatZone is a chat app with rooms, messages, styled input forms & user to user real time communication made with with Rails 7 using Turbo & Stimulus.

- Users can choose to enter multiple chat rooms or make a new room:

![chatzone-index](https://user-images.githubusercontent.com/100665876/213108626-55c1a6df-4873-4292-a8b8-3a7e6bd5c819.jpeg)

- Here user Joel chats with user John:

![ChatZone-show](https://user-images.githubusercontent.com/100665876/213362780-c1032945-6c06-4fe8-8955-5e6dff309869.jpeg)



## Please initialize these before starting the app:

### Versions


![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white) 3.0.3p157 (2021-11-24 revision 3fb7d2cadc) [x86_64-linux]

![Ruby on Rails](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white) 7.0.4

```
 git clone git@github.com:guavalines/ChatZone.git
 cd ChatZone
 rails db:create db:migrate db:seed:replant
 bundle install
 yarn install
 rails server
 ```
 
 To have two different users talk to each other type bin/dev in your console for user 1, and open your browser and visit localhost:3000 for user 2.
