package com.group1j.backend.entities;

import javax.persistence.*;

@MappedSuperclass
public class Appointment {
    //Fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private int appointmentID;

    private int patientID;
    private String date;
    private boolean isApproved;


    //Default Constructor
    public Appointment(){

    }

    //Constructor
    public Appointment(int patientID, String date, boolean isApproved) {
        this.patientID = patientID;
        this.date = date;
        this.isApproved = isApproved;
    }

    public int getAppointmentID() {
        return appointmentID;
    }

    public void setAppointmentID(int appointmentID) {
        this.appointmentID = appointmentID;
    }

    public int getPatientID() {
        return patientID;
    }

    public void setPatientID(int patientID) {
        this.patientID = patientID;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isApproved() {
        return isApproved;
    }

    public void setApproved(boolean approved) {
        isApproved = approved;
    }
}
