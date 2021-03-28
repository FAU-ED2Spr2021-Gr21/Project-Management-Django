from neomodel import (
    StringProperty,
    StructuredNode,
    RelationshipFrom
)

from .nodeutils import NodeUtils

class Entity(StructuredNode, NodeUtils):
    id                                 = StringProperty(index = True)
    text                               = StringProperty()
    type                               = StringProperty()
    entity                             = RelationshipFrom('.entity.Entity', 'HAS_ENTITY')

    @property
    def serialize(self):
        return {
            'node_properties': {
                'id': self.id,
                'text': self.text,
                'type': self.type,
            },
        }
    
    @property
    def serialize_connections(self):
        return [
            {
                'nodes_type': 'Entity',
                'nodes_related': self.serialize_relationships(self.entity.all()),
            },
        ]

class Quantity(Entity):
    identity                           = StringProperty(index = True)
    text                               = StringProperty()
    type                               = StringProperty()
    entity                             = RelationshipFrom('.entity.Entity', 'HAS_ENTITY')

    @property
    def serialize(self):
        return {
            'node_properties': {
                'id': self.id,
                'text': self.text,
                'type': self.type,
            },
        }
    
    @property
    def serialize_connections(self):
        return [
            {
                'nodes_type': 'Entity',
                'nodes_related': self.serialize_relationships(self.entity.all()),
            },
        ]

class Other(Entity):
    identity                           = StringProperty(index = True)
    text                               = StringProperty()
    type                               = StringProperty()
    entity                             = RelationshipFrom('.entity.Entity', 'HAS_ENTITY')

    @property
    def serialize(self):
        return {
            'node_properties': {
                'id': self.id,
                'text': self.text,
                'type': self.type,
            },
        }
    
    @property
    def serialize_connections(self):
        return [
            {
                'nodes_type': 'Entity',
                'nodes_related': self.serialize_relationships(self.entity.all()),
            },
        ]

class Person(Entity):
    id                                 = StringProperty(index = True)
    text                               = StringProperty()
    type                               = StringProperty()
    entity                             = RelationshipFrom('.entity.Entity', 'HAS_ENTITY')

    @property
    def serialize(self):
        return {
            'node_properties': {
                'id': self.id,
                'text': self.text,
                'type': self.type,
            },
        }
    
    @property
    def serialize_connections(self):
        return [
            {
                'nodes_type': 'Entity',
                'nodes_related': self.serialize_relationships(self.entity.all()),
            },
        ]



