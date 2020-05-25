package com.example.websitedatabase.controller;

import com.example.websitedatabase.exceptions.ResourcesNotFoundException;
import com.example.websitedatabase.model.User;
import com.example.websitedatabase.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/my_recipes_book/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;


//  get all User


    @GetMapping("/users")
    public List<User> getAllUser(Model model) {

        return this.userRepository.findAll();

    }

//  get all User by id

    @GetMapping("/users/{id}")
    public ResponseEntity<User> useruserById(@PathVariable(value = "id") Long userId)
            throws ResourcesNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourcesNotFoundException("User not found for this id :: " + userId));
        return ResponseEntity.ok().body(user);
    }


//  save user

    @PostMapping("/users")
    public User createuser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

//  Update Employee

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateuser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails)
            throws ResourcesNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourcesNotFoundException("User not found for this id :: " + userId));

        user.setFullName(userDetails.getFullName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setPictureUrl(userDetails.getPictureUrl());

        final User updatedUser = userRepository.save(user);


        return ResponseEntity.ok(updatedUser);

    }

//  Delete User

    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
            throws ResourcesNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourcesNotFoundException("Employee not found for this id :: " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted user", Boolean.TRUE);

        return response;

    }
}