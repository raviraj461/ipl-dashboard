package com.bollampally.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bollampally.ipldashboard.data.model.Team;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long>{

	Team findByTeamName(String teamName);
	Iterable<Team> findAllByOrderByTeamNameAsc();
}
