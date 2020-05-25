package com.example.websitedatabase.repository;

import com.example.websitedatabase.model.Subscriptions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface SubscriptionsRepository extends JpaRepository<Subscriptions, Long> {

}