package com.example.ecom.order.repository;

import com.example.ecom.order.entity.Order;
import com.example.ecom.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUser(User user);

    Optional<Order> findByOrderNumber(String orderNumber);
}