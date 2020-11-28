package com.udremaja.udremaja.core.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserService(@Autowired val repository: UserRepository): UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails {
        val user = repository.findByName(username)
        if (user == null){
            throw UsernameNotFoundException("Could no find user with name: $username")
        }else{
            return user
        }
    }
}