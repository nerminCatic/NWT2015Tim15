class Api::FeedbacksController < ApplicationController
  #before_filter :restrict_api_access
  before_action :set_feedback, only: [:show, :edit, :update, :destroy]
  skip_before_action :authenticate_request, :set_current_user
  respond_to :json

  # GET /feedbacks
  # GET /feedbacks.json
  def index
    @feedbacks = Feedback.all
    respond_to do |format|
      format.json {
        render json: { feedbacks: @feedbacks }
      }
    end
  end

  # GET /feedbacks/1
  # GET /feedbacks/1.json
  def show
    respond_with @feedback
  end

  # GET /feedbacks/new
  def new
    @feedback = Feedback.new
  end

  # GET /feedbacks/1/edit
  def edit
  end

  # POST /feedbacks
  # POST /feedbacks.json
  def create
    @feedback = Feedback.new(feedback_params)

    respond_to do |format|
      if @feedback.save
        format.json { render json: @feedback, status: :created, location: api_feedback_url(@feedback) }
      else
        format.json { render json: @feedback.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /feedbacks/1
  # PATCH/PUT /feedbacks/1.json
  def update
    respond_to do |format|
      if @feedback.update(feedback_params)
        format.json { head :no_content }
      else
        format.json { render json: @feedback.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /feedbacks/1
  # DELETE /feedbacks/1.json
  def destroy
    @feedback.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback
      @feedback = Feedback.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def feedback_params
      params.require(:feedback).permit(:name, :description, :email, :form)
    end
end
#komentar
