/**
 * Created by Chen on 2016-08-26.
 */
import FilterLink from "./FilterLink";
import {View, Text} from "react-native";
import React from "react";

const FilterList = ({filter="SHOW_ALL", whenSetFilter}) => (
    <View>
      <Text>
        Show:
      </Text>
      <FilterLink text = "All"
                  currentFilter = {filter}
                  filter = {"SHOW_ALL"}
                  whenSetFilter = {(filter)=>whenSetFilter(filter)}/>
      <FilterLink text = "Active"
                  currentFilter = {filter}
                  filter = {"SHOW_ACTIVE"}
                  whenSetFilter = {(filter)=>whenSetFilter(filter)}/>
      <FilterLink text = "Completed"
                  currentFilter = {filter}
                  filter = {"SHOW_COMPLETED"}
                  whenSetFilter = {(filter)=>whenSetFilter(filter)}/>
    </View>
);


FilterList.propTypes = {
  filter: React.PropTypes.string,
  whenSetFilter: React.PropTypes.func,
};

export default FilterList;