package com.udremaja.udremaja.core.user

import com.udremaja.udremaja.base.DatabaseEntity
import org.springframework.security.core.GrantedAuthority
import javax.persistence.Entity

@Entity
class AppAuthority(name: String): DatabaseEntity(name), GrantedAuthority {
    override fun getAuthority(): String = name
}