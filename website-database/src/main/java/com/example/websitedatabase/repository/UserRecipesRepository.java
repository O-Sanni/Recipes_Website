package com.example.websitedatabase.repository;

import com.example.websitedatabase.model.UserRecipes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface UserRecipesRepository extends JpaRepository<UserRecipes, Long> {

}