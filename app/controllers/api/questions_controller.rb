class Api::QuestionsController < ApplicationController
  before_filter :restrict_api_access
  before_action :set_question, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /questions
  # GET /questions.json
  def index
      begin
        if params[:category_id] #&& params[:user_id]
          @questions = Question.where("category_id = ?", params[:category_id])
        else
          @questions = Question.all
        end
        respond_to do |format|
          format.json {
            render json: { questions: @questions }
          }
        end
      rescue
        render json: { message: 'Record not found!' }, :status => :bad_request
      end
  end

  # GET /questions/1
  # GET /questions/1.json
  def show
  end

  # GET /questions/new
  def new
    @question = Question.new
  end

  # GET /questions/1/edit
  def edit
  end

  # POST /questions
  # POST /questions.json
  def create
    @question = Question.new(question_params)

    respond_to do |format|
      if @question.save
        format.json { render json: @question, status: :created, location: api_question_url(@question) }
      else
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /questions/1
  # PATCH/PUT /questions/1.json
  def update
    respond_to do |format|
      if @question.update(question_params)
        format.json { head :no_content }
      else
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.json
  #automaticaly destroy all coments on this question
  def destroy
    @comments = Comment.where(question_id: @question.id)
    @comments.each do |comment|
      comment.destroy
    end
    @question.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def question_params
      params.require(:question).permit(:name, :question, :description, :user_id, :category_id)
    end
end
#komentar