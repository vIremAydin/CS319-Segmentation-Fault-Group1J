package com.group1j.backend.entities;

import org.springframework.web.bind.annotation.PostMapping;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;

@Entity
public class TestAppointment extends Appointment {
    //Fields
    @OneToOne(fetch = FetchType.LAZY)
    private Nurse relatedNurse;

    //Default Constructor
    public TestAppointment() {

    }

    //Constructor
    public TestAppointment(int patientID, String date, boolean isApproved, Nurse relatedNurse) {
        super(patientID, date, isApproved);
        this.relatedNurse = relatedNurse;
    }

    public Nurse getRelatedNurse() {
        return relatedNurse;
    }

    public void setRelatedNurse(Nurse relatedNurse) {
        this.relatedNurse = relatedNurse;
    }
}
