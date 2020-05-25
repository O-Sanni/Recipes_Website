package com.example.websitedatabase.controller;

import com.example.websitedatabase.exceptions.ResourcesNotFoundException;
import com.example.websitedatabase.model.Subscriptions;
import com.example.websitedatabase.repository.SubscriptionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/my_receipts_book/v1")

public class SubscriptionsController {

    @Autowired
    private SubscriptionsRepository subscriptionsRepository;


//  get all subscriptions


    @GetMapping("/subscriptions")
    public List<Subscriptions> getAllSubscriptions(Model model) {

        return this.subscriptionsRepository.findAll();

    }

//  get all subscriptions by id

    @GetMapping("/subscriptions/{id}")
    public ResponseEntity<Subscriptions> getSubscriptionsById(@PathVariable(value = "id") Long subscriptionId)
            throws ResourcesNotFoundException {
        Subscriptions subscription = subscriptionsRepository.findById(subscriptionId)
                .orElseThrow(() -> new ResourcesNotFoundException("Subscription not found for this id :: " + subscriptionId));
        return ResponseEntity.ok().body(subscription);
    }


//  save subscription

    @PostMapping("/subscriptions")
    public Subscriptions createsubscription(@Valid @RequestBody Subscriptions subscription) {
        return subscriptionsRepository.save(subscription);
    }

//  Update Employee

    @PutMapping("/subscriptions/{id}")
    public ResponseEntity<Subscriptions> updateSubscription(@PathVariable(value = "id") Long subscriptionId, @Valid @RequestBody Subscriptions subscriptionDetails)
            throws ResourcesNotFoundException {
        Subscriptions subscription = subscriptionsRepository.findById(subscriptionId)
                .orElseThrow(()-> new ResourcesNotFoundException("Subscription not found for this id :: " + subscriptionId));


        subscription.setEmail(subscriptionDetails.getEmail());
        subscription.setPreferences(subscriptionDetails.getPreferences());


        final Subscriptions updatedSubscription = subscriptionsRepository.save(subscription);


        return ResponseEntity.ok(updatedSubscription);

    }

//  Delete Subscription

    @DeleteMapping("/subscriptions/{id}")
    public Map<String, Boolean> deleteSubscription(@PathVariable(value = "id") Long subscriptionId)
            throws ResourcesNotFoundException {
        Subscriptions subscription = subscriptionsRepository.findById(subscriptionId)
                .orElseThrow(()-> new ResourcesNotFoundException("Employee not found for this id :: " + subscriptionId));

        subscriptionsRepository.delete(subscription);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted subscription", Boolean.TRUE);

        return response;

    }


}