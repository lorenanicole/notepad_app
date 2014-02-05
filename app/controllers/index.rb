get '/' do
  @all_notes = Note.all
  erb :index
end

post '/create' do
  Note.create(title: params[:title], content: params[:content])
  redirect("/")
end

get '/note/:note_id' do
  @note = Note.find(params[:note_id])
  erb :note
end

post '/update/:note_id' do
  @update_note = Note.find(params[:note_id])
  content_type :json
  { :title => @update_note.title, :content => @update_note.content, :id => @update_note.id}.to_json
end

post '/save/:note_id' do
  puts "LOG #{params[:title]}"
  @save_note = Note.find(params[:note_id])
  @save_note.update_attributes(title: params[:title], content: params[:content])
  redirect("/")
end

get '/delete/:note_id' do
  Note.destroy(params[:note_id])
end