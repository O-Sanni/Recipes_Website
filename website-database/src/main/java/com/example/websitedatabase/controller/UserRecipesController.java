package com.example.websitedatabase.controller;

import com.example.websitedatabase.exceptions.ResourcesNotFoundException;
import com.example.websitedatabase.model.UserRecipes;
import com.example.websitedatabase.repository.UserRecipesRepository;
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

public class UserRecipesController {
    @Autowired
    private UserRecipesRepository userRecipesRepository;


//  get all UserRecipes


    @GetMapping("/users_recipes")
    public List<UserRecipes> getAllUserRecipes(Model model) {

        return this.userRecipesRepository.findAll();

    }

//  get all UserRecipes by id

    @GetMapping("/users_recipes/{id}")
    public ResponseEntity<UserRecipes> userRecipesById(@PathVariable(value = "id") Long recipes_id)
            throws ResourcesNotFoundException {
        UserRecipes userRecipes = userRecipesRepository.findById(recipes_id)
                .orElseThrow(() -> new ResourcesNotFoundException("User's recipe not found for this id :: " + recipes_id));
        return ResponseEntity.ok().body(userRecipes);
    }


//  save userRecipes

    @PostMapping("/users_recipes")
    public UserRecipes createUserRecipes(@Valid @RequestBody UserRecipes userRecipes) {
        return userRecipesRepository.save(userRecipes);
    }

//  Update userRecipes

    @PutMapping("/users_recipes/{id}")
    public ResponseEntity<UserRecipes> updateUserRecipes(@PathVariable(value = "id") Long recipes_id, @Valid @RequestBody UserRecipes userRecipesDetails)
            throws ResourcesNotFoundException {
        UserRecipes userRecipes = userRecipesRepository.findById(recipes_id)
                .orElseThrow(()-> new ResourcesNotFoundException("User Receipt not found for this id :: " + recipes_id));

        userRecipes.setRecipesName(userRecipes.getRecipesName());
        userRecipes.setRecipesIngredients(userRecipes.getRecipesIngredients());
        userRecipes.setRecipesCooking(userRecipes.getRecipesCooking());
        userRecipes.setRecipesPicture(userRecipes.getRecipesPicture());

        final UserRecipes updatedUserRecipes = userRecipesRepository.save(userRecipes);


        return ResponseEntity.ok(updatedUserRecipes);

    }

//  Delete User

    @DeleteMapping("/users_recipes/{id}")
    public Map<String, Boolean> deleteUserRecipes(@PathVariable(value = "id") Long recipes_id)
            throws ResourcesNotFoundException {
        UserRecipes userRecipe = userRecipesRepository.findById(recipes_id)
                .orElseThrow(()-> new ResourcesNotFoundException("Recipe not found for this id :: " + recipes_id));

        userRecipesRepository.delete(userRecipe);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted user", Boolean.TRUE);

        return response;

    }
}