package com.aneta.shop.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Role")
public enum Role {

    USER,
    MODERATOR,
    ADMIN
}
