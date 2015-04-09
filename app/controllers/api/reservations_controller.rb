class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :edit, :update, :destroy]
  respond_to :json

  # GET /reservations
  # GET /reservations.json
  def index
      begin
        if params[:status] # Search by status
          @reservations = Reservation.where("status = ?", params[:status])
        elsif params[:user_doctor_id] # Search by doctor
          @reservations = Reservation.where("user_doctor_id = ?", params[:user_doctor_id])
        else
          @reservations = Reservation.all
        end
        respond_to do |format|
          format.json {
            render json: { reservations: @reservations }
          }
        end
      rescue
        render json: { message: 'Record not found!' }, :status => :bad_request
      end
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
    respond_with @reservation
  end

  # GET /reservations/new
  def new
    @reservation = Reservation.new
  end

  # GET /reservations/1/edit
  def edit
  end

  # POST /reservations
  # POST /reservations.json
  def create
    # user = logged_user 
    # on create - only user, appointment and status (by default Waiting)

    @reservation = Reservation.new(reservation_params)
    @reservation.status = "W"
    @reservation.receive_date = Time.now
    respond_to do |format|
      if @reservation.save
        format.json { render json: @reservation, status: :created, location: api_reservation_url(@reservation) }
      else
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  # confirming reservation
  def confirm
    @reservation = Reservation.find(params[:id])
    @reservation.user_doctor = User.find(params[:user_doctor_id])
    @reservation.user_receive = User.find(params[:user_receive_id])
    @reservation.confirm_date = Time.now
    @reservation.status = "A"
    respond_to do |format|
      if @reservation.save
        format.json { head :no_content }
      else
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end 
  end

  # declining reservation
  def decline
   @reservation = Reservation.find(params[:id])
   @reservation.status = "D"
   respond_to do |format|
      if @reservation.save
        format.json { head :no_content }
      else
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
   end
  end

  # PATCH/PUT /reservations/1
  # PATCH/PUT /reservations/1.json
  def update
    respond_to do |format|
      if @reservation.update(reservation_params)
        format.json { head :no_content }
      else
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    @reservation.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:status, :user_patient_id, :appointment_date, :receive_date, :description, :user_receive_id, :user_doctor_id, :confirm_date)
    end
end
#komentar