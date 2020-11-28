package com.udremaja.udremaja.core.user

import com.udremaja.udremaja.base.DatabaseEntity
import com.udremaja.udremaja.core.company.Company
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import javax.persistence.Entity
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "User")
open class AppUser(
        name: String,
        @JvmField private val password: String,
        val email: String,
        @ManyToOne
        val company: Company,
        @OneToMany
        @JvmField private val authorities: MutableSet<AppAuthority> = mutableSetOf()
): DatabaseEntity(name), UserDetails{

    override fun getUsername(): String = name
    override fun getPassword(): String = password
    override fun getAuthorities(): MutableCollection<out GrantedAuthority> = authorities
    override fun isEnabled() = true
    override fun isCredentialsNonExpired() = true
    override fun isAccountNonExpired() = true
    override fun isAccountNonLocked() = true

}
