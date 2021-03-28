from neomodel import (
    StringProperty,
    StructuredNode,
    RelationshipTo
)

from .nodeutils import NodeUtils

class Story(StructuredNode, NodeUtils):
    nodeID                           = StringProperty(index = True )
    sentimentScore                     = StringProperty()
    sentiment                          = StringProperty()
    notes                              = StringProperty()
    name                               = StringProperty()
    value                              = StringProperty()
    acceptance_criteria                = StringProperty()
    keyphrase                          = RelationshipTo('.keyphrase.KeyPhrase', 'HAS_KEYPHRASE')
    entity                             = RelationshipTo('.entity.Entity', 'HAS_ENTITY')
    actor                              = RelationshipTo('.actor.Actor', 'HAS_ACTOR')
    platform                           = RelationshipTo('.platform.Platform', 'HAS_PLATFORM')

    @property
    def serialize(self):
        return {
            'node_properties': {
                'id': self.nodeID,
                'sentimentScore': self.sentimentScore,
                'sentiment': self.sentiment,
                'notes': self.notes,
                'name': self.name,
                'value': self.value,
                'acceptance_criteria': self.acceptance_criteria,
            },
        }
    @property
    def serialize_connections(self):
        return [
            {
                'nodes_type': 'KeyPhrase',
                'nodes_related': self.serialize_relationships(self.kephrase.all()),
            },
            {
                'nodes_type': 'Entity',
                'nodes_related': self.serialize_relationships(self.entity.all()),
            },
            {
                'nodes_type': 'Actor',
                'nodes_related': self.serialize_relationships(self.actor.all()),
            },
            {
                'nodes_type': 'Platform',
                'nodes_related': self.serialize_relationships(self.platform.all()),
            },
        ]


