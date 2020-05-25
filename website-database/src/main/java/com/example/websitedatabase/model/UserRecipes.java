package com.example.websitedatabase.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "user_recipes")
public class UserRecipes {

    @Id
    @GeneratedValue
    @Column(name = "recipes_id")
    private long recipes_id;


    @Column(name = "userName")
    private String userName;


    @Column(name = "recipes_name")
    private String recipesName;

    @Column(name = "recipes_ingredients")
    private String recipesIngredients;

    @Column(name = "recipes_cooking")
    private String recipesCooking;

    @Column (name="recipes_picture")
    private String recipesPicture;

    public UserRecipes() {
        super();
    }

    public UserRecipes(String recipesName,String userName, String recipesIngredients, String recipesCooking, String recipesPicture) {
        super();
        this.recipesName = recipesName;
        this.userName=userName;
        this.recipesIngredients = recipesIngredients;
        this.recipesCooking = recipesCooking;
        this.recipesPicture=recipesPicture;
    }

    public long getId() {
        return recipes_id;
    }

    public void setId(long recipes_id) {
        this.recipes_id = recipes_id;
    }


    public String getRecipesName() {
        return recipesName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getUserName() {
        return userName;
    }

    public void setRecipesName(String recipesName) {
        this.recipesName = recipesName;
    }
    public void setRecipesIngredients(String recipesIngredients) {
        this.recipesIngredients = recipesIngredients;
    }

    public String getRecipesIngredients() {
        return recipesIngredients;
    }

    public void setRecipesCooking(String recipesCooking) {
        this.recipesCooking = recipesCooking;
    }

    public String getRecipesCooking() {
        return recipesCooking;
    }

    public void setRecipesPicture(String recipesPicture){
        this.recipesPicture=recipesPicture;
    }
    public String getRecipesPicture(){
        return recipesPicture;
    }
}
