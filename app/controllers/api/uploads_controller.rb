class Api::UploadsController < ApiController
  before_filter :restrict_api_access, except: [:create, :show]

  def index
    question = Question.find(params[:question_id])
    uploads = question.uploads.order('created_at DESC')
    render response: { resources: uploads }
  end

  def create
    upload = Upload.new
    upload.file_data = params[:file]
   upload.question = Question.find(params[:question_id])
    upload.save_binary
    upload.save
    render response: { upload: upload }
  end

  def show
    upload = Question.find(params[:question_id]).uploads.find(params[:id])
   data = upload.binary.data

    send_data(data, :type => upload.content_type, :filename => upload.filename, :disposition => 'download')
  end
end 
