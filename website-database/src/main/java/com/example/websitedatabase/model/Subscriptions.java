package com.example.websitedatabase.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "Subscription")
public class Subscriptions {



    @Id
    @GeneratedValue
    @Column(name = "subscription_id")
    private long subscriptionId;


    @Column(name = "email")
    private String email;


    @Column(name = "preferences")
    private String preferences;

    public Subscriptions() {
        super();
    }

    public Subscriptions(String email, String preferences) {
        super();
        this.email = email;
        this.preferences = preferences;
    }

    public long getId() {
        return subscriptionId;
    }

    public void setId(long subscriptionId) {
        this.subscriptionId = subscriptionId;
    }


    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPreferences(String preferences) {
        this.preferences = preferences;
    }

    public String getPreferences() {
        return preferences;
    }
}

