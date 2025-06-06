package com.studystay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.studystay.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
