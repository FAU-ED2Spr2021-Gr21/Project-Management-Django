from neomodel import (
    StringProperty,
    StructuredNode,
    Relationship
)


class Platform(StructuredNode):
    id = StringProperty(index=True)
    name = StringProperty()
    entity = Relationship('.entity.Entity', 'HAS_ENTITY')
